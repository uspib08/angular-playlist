import { Morceau } from "./Morceau";

export class PlayList{
    _nom : string="";
    _createur : string="";
    _style : string="";
    _nbclicks : number=0;
    _listMorceaux : Morceau[]= new Array();
    _listContributeurs : string[] = new Array();
}