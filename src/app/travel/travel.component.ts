import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  providers: [PostService]
})
export class TravelComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.getTravelPosts();
  }

  posts: Post[];
  travelPosts: Post[] = [];

  getTravelPosts() {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].category === 'travel') {
        this.travelPosts.push(this.posts[i]);
      }
    }
    return this.travelPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  }
