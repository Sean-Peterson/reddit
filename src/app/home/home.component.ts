import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  upVote(post) {
    post.vote += 1;
  }

  downVote(post) {
    post.vote -= 1;
  }

  voteColor(post) {
    if (post.vote <= -10) {
      return "lighter";
    } else if (post.vote >= 10) {
      return "oranger";
    }
  }

  posts: Post[];

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
