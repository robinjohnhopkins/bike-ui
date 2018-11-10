import { Component, OnInit } from '@angular/core';
import { BikeService} from '../../services/bike.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeService: BikeService) { 
    console.log('AdminComponent ctor');
  }

  ngOnInit() {
    console.log('AdminComponent ngOnInit');
    this.getBikes();
  }

  getBikes(){
    console.log('AdminComponent getBikes');
    
    this.bikeService.getBikes().subscribe(
      data => { 
        this.bikes = data;
        console.log('AdminComponent getBikes');
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
  
}
