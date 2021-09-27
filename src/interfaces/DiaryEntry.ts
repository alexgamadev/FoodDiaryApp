import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from "luxon";
import Realm from "realm";


export class DiaryEntry {
    public id: string;
    public mealName: string;
    public description: string | null;
    public createdAt: String;
    public imageURI: string | null;

    constructor(mealName: string, description: string | null, createdAt: DateTime, imageURI: string | null) {
        this.id = uuidv4();
        this.mealName = mealName;
        this.description = description;
        this.createdAt = createdAt.toUTC().toISO();
        this.imageURI = imageURI;
    }

    static schema: Realm.ObjectSchema = {
        "name": "DiaryEntry",
        "primaryKey": "id",
        "properties": {
            id: "string",
            mealName: "string",
            description: "string?",
            createdAt: "string",
            imageURI: "string?"
        }
    }
}