import { Injectable } from '@nestjs/common';
import firebase from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private firebaseAdmin: firebase.app.App;

  public auth() {
    if (!this.firebaseAdmin) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const serviceAccount = require('../../../keys/firebase_auth.json');
      this.firebaseAdmin = firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        projectId: serviceAccount.project_id,
      });
    }
    return this.firebaseAdmin.auth();
  }
}
