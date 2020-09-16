import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from '../models/order-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  static readonly   ORDER_URL:string="/orderProducer/order/";

  constructor(private http: HttpClient) { }
  getAllOrders():Observable<OrderDetails[]>{
     return this.http.get<OrderDetails[]>(OrderService.ORDER_URL+'all');
  }

  getOrder(orderId:string):Observable<OrderDetails>{
    return this.http.get<OrderDetails>(OrderService.ORDER_URL+'myUser/'+orderId);
 }

  deleteOrder(order:OrderDetails){
    return this.http.put(OrderService.ORDER_URL+"delete", order,{responseType: 'text'});


  }
  updateOrder(order:OrderDetails){
    return this.http.put(OrderService.ORDER_URL+'update',order, {responseType: 'text'});


  }
  createOrder(order:OrderDetails){
    return this.http.post(OrderService.ORDER_URL,order, {responseType: 'text'});


  }
}
