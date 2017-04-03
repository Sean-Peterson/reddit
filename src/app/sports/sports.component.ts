import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [PostService]
})
export class SportsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.getSportsPosts();
  }

  posts: Post[];
  sportsPosts: Post[] = [];

  getSportsPosts() {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].category === 'sports') {
        this.sportsPosts.push(this.posts[i]);
      }
    }
    return this.sportsPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  }
