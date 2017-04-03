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
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.getFoodPosts();
  }

  posts: Post[];
  foodPosts: Post[] = [];

  getFoodPosts() {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].category === 'food') {
        this.foodPosts.push(this.posts[i]);
      }
    }
    return this.foodPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
