import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [PostService]
})
export class NewsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  postsToDisplay: Post[] = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })
    this.getNewsPosts();
  }

  posts: FirebaseListObservable<any[]>;
  newsPosts: Post[] = [];

  getNewsPosts() {
    for (var i = 0; i < this.postsToDisplay.length; i++) {
      if (this.postsToDisplay[i].category === 'news') {
        this.newsPosts.push(this.postsToDisplay[i]);
      }
    }
    return this.newsPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
