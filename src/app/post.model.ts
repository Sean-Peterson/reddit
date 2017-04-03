export class Post {
  show: boolean = false;
  vote: number = 0;

  constructor(public title: string, public content: string, public date: number, public category: string) {}
}
