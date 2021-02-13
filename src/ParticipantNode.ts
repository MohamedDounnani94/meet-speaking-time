import { jsControllerCodes } from './constants'

export class ParticipantNode {
  initialId: string;
  mainNodeQuerySelector: string;
  microphoneQuerySelector: string;
  nameNodeQuerySelector: string;

  constructor (initialId:string)  {
    this.initialId = initialId;
    this.mainNodeQuerySelector = `div[jscontroller="${jsControllerCodes.participantBox}"][data-initial-participant-id="${this.initialId}"]`
    this.microphoneQuerySelector = `div[jscontroller="${jsControllerCodes.microphoneBox}"]`;
    this.nameNodeQuerySelector = `div[jscontroller="${jsControllerCodes.participantNameBox}"]`;
  }

  getMainElement () : Element {
    return document.querySelector(`${this.mainNodeQuerySelector}`)
  }

  getMicrophoneElement () : Element {
    return this.getMainElement().querySelector(`${this.microphoneQuerySelector}`);
  }

  getNameElement (): Element {
    return this.getMainElement().querySelector(`${this.nameNodeQuerySelector}`);
  }

  getName () : string {
    return this.getNameElement() ? this.getNameElement().innerHTML : "";
  }
  
}