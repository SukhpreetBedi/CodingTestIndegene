import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FizzService} from '../services/fizz.service';


@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.css']
})
export class FoobarComponent implements OnInit, AfterViewInit {
  @ViewChild('fizzBarElement') fizzBarElement: any;

  constructor(private fizzService: FizzService) {
  }

  ngOnInit() {
    console.log('Foobar Component:ngOnInit');
  }

  OnClick() {
    this.fizzBarElement.nativeElement.value = 'Button Clicked';
  }

  ngAfterViewInit(): void {
    console.log('Foobar Component:ngAfterViewInit');
  }
}
