import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RestauarantViewItemPayLoad } from '../../shared/models/restaurant.view.model'

@Injectable({ providedIn: 'root' })
export class RestaurantViewItemService {
    private subject = new Subject<RestauarantViewItemPayLoad>();

    sendMessage(message: RestauarantViewItemPayLoad) {

        this.subject.next(message );
    }

    clearMessages() {
        this.subject = new Subject<RestauarantViewItemPayLoad>();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
