import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public active: boolean;

  constructor(private loaderService:LoaderService) {
    loaderService.status.subscribe((status: boolean) => {
      this.active = status;
    });
   }

  ngOnInit(): void {
  }

}
