import { Pipe, Injectable, PipeTransform } from '@angular/core'


@Pipe({
    name: 'messageFilter'
})

export class MessageFilterPipe implements PipeTransform{
    transform(items:any, search:any):any {
        if (search=== undefined) {
            return items;
        }
        else{
            return items.filter((items)=>{
                return items.username.toLowerCase().includes(search.toLowerCase());
            })
        }
    }

}