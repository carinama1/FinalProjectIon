import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  DummyImage1 = require("../../assets/testing1.jpg");
  DummyImage2 = require("../../assets/testing2.jpg");
  posts = [
    {
      img: this.DummyImage1,
      title: "Post Number1",
      author: "carinama1",
      time: "3 Minutes Ago",
      source: "Facebook",
      fun: "332"
    },
    {
      img: this.DummyImage2,
      title: "Post Number2",
      author: "carinama2",
      time: "10 Minutes Ago",
      source: "Yahoo Answer",
      fun: "532"
    }
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("type")) {
        // redirect
        console.log("this is home");
        return;
      }
      const type = paramMap.get("type");

      console.log(type);
    });
  }

  ngOnInit() {}
}
