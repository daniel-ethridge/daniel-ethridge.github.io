import { Injectable } from "@angular/core";
import { Literature } from "../_models/Literature";
import literatureData from "./json/literature.json"

@Injectable({
    providedIn: 'root'
})

export class LiteratureService {
    literature: Literature[] = literatureData;
  
    constructor() { }
  
    getLiterature(): Literature[] {
        // Create an unsorted interface
        interface Unsorted {
            id: number,
            timekey: number
        };

        // Create an unsorted array. Iterate over each element in the Literature array to fill the unsorted array.
        let unsorted: Unsorted[] = [];
        let noMonthKey: number = 0.001;
        let newId = 0;
        this.literature.forEach(element => {
            let timestring: string;
            element.id = newId;
            newId += 1;
            if ((element.month != undefined) && (element.month != 0)) {
                let monthString: string = element.month.toString();
                if (monthString.length === 1) {
                    monthString = "0" + monthString;
                }
                timestring = element.year.toString() + "." + monthString;
            }
            else {
                timestring = (element.year + noMonthKey).toString();
                noMonthKey += 0.001;
            }
            
            unsorted.push({
                id: element.id,
                timekey: Number(timestring)
            });

        });

        // Get the timekeys from the unsorted array and sort
        let timekeys: number[] = [];
        unsorted.forEach(element => {
            timekeys.push(element.timekey);
        });

        timekeys.sort();

        // Function to get Id by Timekey
        let getIdByTimekey = (timekey: number): number => {
            let returnKey: number = -1;
            unsorted.forEach(element => {
                if (element.timekey === timekey) {
                    returnKey = element.id;
                    return;
                }
            });

            return returnKey;
        }

        // Get the sorted Ids
        let sortedIds: number[] = [];
        timekeys.forEach(element => {
            sortedIds.push(getIdByTimekey(element));
        });

        // Create a function to get the literature by Id
        let getLiteratureById = (id: number) => {
            let lit: Literature = {  // Default lit
                title: "",
                id: -1,
                authors: [],
                year: -1
            };

            this.literature.forEach(element => {
                if (element.id === id) {
                    lit = element;
                    return;
                }
            })

            return lit;
        }

        // Create the sorted array and return
        let sorted: Literature[] = [];
        sortedIds.forEach(element => {
            sorted.push(getLiteratureById(element));
        });

        return sorted;
    }
  }
  