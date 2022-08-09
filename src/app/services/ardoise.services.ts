import {Injectable} from "@angular/core";
import {Ardoise} from "../models/ardoise-model";

@Injectable({
  providedIn: 'root'
})
export class ArdoiseServices{
  ardoises: Ardoise[] = [{
    id:1,
    title:'Vacances',
    description:'vacances en bretagne avec les collègues'
  },
    {id:2,
      title:'Kebab',
      description:'J\'ai envie de me taper un giga tacos'
    }];

  getAllArdoises(): Ardoise[]{
    return this.ardoises;
  }
  getArdoiseById(id: number): Ardoise {
    const ardoise = this.ardoises.find(ardoise => ardoise.id === id);
    if (!ardoise) {
      throw new Error('Ardoise not found')
    } else {
      return ardoise;
    }
  }
}
