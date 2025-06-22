import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pruebasUnitarias';
   ngOnInit(): void {
   /* let calculator = new Calculator();
    let result = calculator.multiply(3, 4);
    console.log(result === 12);// Test passed
    console.log(result !==9); //Test passed


    let result2 = calculator.divide(6,2);
    console.log(result2 === 3); // Test passed
    console.log(result2 !== 43); // Test passed

    let result3 = calculator.divide(6,0);
    console.log(result3 === null);*/
  }
}
