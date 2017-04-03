import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [PostService]
})
export class FoodComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  postsToDisplay: Post[] = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length; i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })

    this.getFoodPosts();
  }

  posts: FirebaseListObservable<any[]>;
  foodPosts: Post[] = [];

  getFoodPosts() {
    for (var i = 0; i < this.postsToDisplay.length; i++) {
      if (this.postsToDisplay[i].category === 'food') {
        this.foodPosts.push(this.postsToDisplay[i]);
      }
    }

    console.log(this.foodPosts);
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
