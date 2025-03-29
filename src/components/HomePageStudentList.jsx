import React, { useContext } from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonText,
  IonButton,
} from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import { deleteStudentById } from "../dataservice.tsx";
import { ScannerContext } from "../services/ScannerContext.jsx";

function HomePageStudentList({ name, id, id_number }) {
  const { recorded, setRecorded } = useContext(ScannerContext);

  const deleteStudent = async (id) => {
    try {
      if(confirm('Are you sure you want to delete? records will be lost and cannot be recovered.')) {
        await deleteStudentById(id);
      }
      setRecorded(!recorded);
    } catch (err) {
      alert("Error deleting: " + err);
    }
  };

  return (
    <>
      <IonCard>
        <IonCardContent
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <IonText color="dark">
              <span style={{ fontWeight: "bold" }}>{name}</span>
            </IonText>
            <sm style={{ fontSize: ".9em" }}>{id_number}</sm>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
            <IonButton fill='outline'  shape='round' routerLink={`edit/${id}`}>
              <IonIcon slot='icon-only' icon={pencil} />
            </IonButton>
            <IonButton fill='outline' shape='round' onClick={() => deleteStudent(id)}>
              <IonIcon slot='icon-only' icon={trash} />
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard>

      {/*  <IonItemSliding>
            <IonItem button={true}>
              <IonLabel color='dark'>{ name }</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="success" routerLink={`edit/${id}`}>
                <IonIcon slot="icon-only" icon={pencil}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true} onClick={() => deleteStudent(id)}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>*/}
    </>
  );
}
export default HomePageStudentList;
