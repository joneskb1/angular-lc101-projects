import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Fav pics!";
  image1 =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fst-jmg%2Fapp%2Fuploads%2F2016%2F06%2F04093747%2FIMG_1794.jpg&f=1&nofb=1";
  image2 = "http://www.drodd.com/images10/beach-wallpaper26.jpg";
  image3 =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsydney.edu.au%2Fdam%2Fcorporate%2Fimages%2Fnews-and-opinion%2Fnews%2F2018%2Foctober%2Fpuppy_dog.jpg%2F_jcr_content%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&f=1&nofb=1";

  constructor() {}

  ngOnInit() {}
}
