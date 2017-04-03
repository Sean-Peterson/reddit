import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [PostService]
})
export class FoodComponent implements OnInit {

  posts: Post[];
  foodPosts: Post[] = [];

  getFoodPosts() {
    for (var i = 0; i < this.posts.length; i++) {
      console.log(this.posts[i]);
      if (this.posts[i].category === 'food') {
        this.foodPosts.push(this.posts[i]);
      }
    }
    return this.foodPosts;
  }

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.getFoodPosts();
  }

}
