import { Component, OnInit} from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})

export class PatientsComponent implements OnInit {
  showNavigationArrows = true;
	showNavigationIndicators = true;
  // images = ["..//src/assets/images/gallery/Home1.png", "..//src/assets/images/gallery/Home2.png", "..//src/assets/images/gallery/Home4.png"]
  constructor(config: NgbCarouselConfig) { 
  config.showNavigationArrows = false;
  config.showNavigationIndicators = true;
  config.interval = 5000;
  config.pauseOnHover = false;

  }

  ngOnInit(): void {
  }

}
