import { DateTime } from "luxon";
import Realm from "realm";

export interface DiaryEntry {
    id: string;
    mealName: string;
    description: string | null;
    createdAt: DateTime;
    imageURI: string | null;
}

const DiaryEntrySchema: Realm.ObjectSchema = {
    "name": "DiaryEntry",
    "primaryKey": "_id",
    "properties": {
        _id: "string",
        mealName: "string",
        description: "string?",
        createdAt: "string",
        imageURI: "string?"
    }
}

export { DiaryEntrySchema };