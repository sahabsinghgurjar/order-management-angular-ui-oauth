import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppMessageService } from 'src/app/AppCommon/services/app-message.service';
import { AppUser } from '../../models/app-user.model';
import { OrderDetails } from '../../models/order-details.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderFormGroup :FormGroup;
 msgKey;
 userId:string;


 constructor( private route: ActivatedRoute,private fb: FormBuilder,private orderService: OrderService,private appMessageService:AppMessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
  });

    this.orderFormGroup =this.fb.group({
      orderName: ['', Validators.required],
      orderId: ['', Validators.required],
      price: ['',Validators.required],
     
    });
    this.msgKey=this.appMessageService.ORDER_FORM;
  }

  onSubmit() {
    const orderDetails=new OrderDetails();
    orderDetails.orderId=this.orderFormGroup.get("orderId").value;
    orderDetails.orderName=this.orderFormGroup.get("orderName").value;
    orderDetails.price=this.orderFormGroup.get("price").value;
   
    this.orderService.createOrder(orderDetails).subscribe(data=>{
      this.appMessageService.addOrderSucessMsg(data);
      console.debug(data);
    }, err =>   this.appMessageService.addOrderFailedMsg(err.error));
  }
 
}
