import React, { useContext, useState } from 'react';
import { 
  IonPage,
  IonHeader,
  IonToolbar, 
  IonButton, 
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonText
} from '@ionic/react'
import api from '../services/api.js'

export default function AddStudent({ isOpen, closeModal }) {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [strand, setStrand] = useState('');

  const handleSubmit = async() => {
    try {
      const response = await api.post('/api/student', {
        name: name,
        id_number: idNumber,
        strand: strand
      });

      console.log(response)


    } catch(err) {
      console.log(err)
      alert("Something went wrong, please check if all fields are filled.")
    } 


  }

  return (
  	<>
  		<IonPage>
        <IonHeader>
            <IonToolbar>
            </IonToolbar>
        </IonHeader>
        <IonContent class='ion-padding' >
        {/*<IonText color='dark'><h2>Add Classmate</h2></IonText>*/}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <IonInput 
                label="Full name" 
                labelPlacement="floating" 
                fill='outline'
                onIonInput={(e) => setName(e.detail.value!) } 
              />
              <IonInput 
                label="ID Number" 
                labelPlacement="floating" 
                fill='outline'
                onIonInput={(e) => setIdNumber(e.detail.value!) } 
                />
              <IonInput 
                label="Strand-Level-Section"
                labelPlacement="floating" 
                fill='outline' 
                placeholder="STRAND-LEVEL-SECTION"
                onIonInput={(e) => setStrand(e.detail.value!) } 
                />
              <IonButton onClick={handleSubmit} expand='block' color='dark'>Submit</IonButton>
          </div>
        </IonContent>
      </IonPage>
  	</>
  );
}
