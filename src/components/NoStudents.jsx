/* import { IonCol, IonRow, IonText } from "@ionic/react";

const NoStudents = () => (

	<IonRow className="ion-text-center ion-justify-content-center">
    <IonCol size="9">
      <IonText class='brand-text' color='primary' style={{ fontSize: '2em' }}>Lourdes College QR Attendance Checker</IonText>
      <img src="/assets/icon2.png" alt="icon" />
      <p> This app is currently in its prototype stage and is still under development. You may encounter bugs, incomplete features, or unexpected behavior. <IonText color="primary"> Welcome! </IonText>. Please click the button in the bottom right to get started.</p>
    </IonCol>
  </IonRow>
);

export default NoStudents; */

import { IonCol, IonRow, IonText } from "@ionic/react";

const NoStudents = () => (
  <IonRow className="ion-text-center ion-justify-content-center">
    <IonCol size="9">
      <IonText className="brand-text" color="primary" style={{ fontSize: '2em' }}>
        eBeadle: QR Code-Based Attendance Checker
      </IonText>
      <img src="/assets/icon2.png" alt="icon" />
      <p>
        This app is currently in its <IonText color="primary">prototype stage</IonText> and still under development. 
        You may encounter <IonText color="primary">bugs</IonText>, <IonText color="primary">incomplete features</IonText>, 
        or <IonText color="primary">unexpected behavior</IonText>.
      </p>
      <p>
        <IonText color="primary">Welcome!</IonText> Please click the button in the bottom right to get started.
      </p>
      
      <IonText className="credits" style={{ fontSize: '0.75em', marginTop: '20px', display: 'block' }}>
  Developed by <IonText color="primary" style={{ fontSize: '0.75em' }}>
    JynJo and Puting Lobo Studios | ©2025
  </IonText>
</IonText>
    </IonCol>
  </IonRow>
);

export default NoStudents;
