import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getSkill (): string[] {
    return ['Javascript','HTML','MySQL','Node.JS','Kao','Cloud Deployment'];
  }
  getAboutMe():string{
    return "Hello! My name is Tae I live in Bkk now...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat incidunt architecto debitis illo nobis repudiandae impedit. Consectetur similique voluptas eligendi? Voluptas porro mollitia quod dolor repellendus iure veritatis facere earum minus debitisnobis, temporibus voluptatem quibusdam quos fuga magnam impedit hic, ea et consequatur illo! Explicabo quia inventore enim modi."
  }
  getPortfolio():string{
    return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur quisquam, recusandae animi mollitia rerum repellat ipsam totam eveniet necessitatibus quos provident quasi numquam praesentium! Soluta totam nostrum, assumenda, voluptatibus, minimaquasi sed aut iste necessitatibus beatae eveniet expedita molestias ex eum vero nam tempore blanditiis! Laboriosam nemo repudiandae aspernatur aliquam sed, odio eius impedit quis error provident expedita, ullam quidem inventore voluptates quibusdamunde velit id delectus maiores est quas itaque voluptatibus pariatur! Saepe dolore nulla facere quae distinctio optio excepturi rerum, debitis, ipsam delectus explicabo repudiandae! Tempore dolorem quos accusamus, alias ea vero itaque voluptates quisquamautem praesentium!"
  }
  getContectMe():string[]{
    return ["Address :Bangkok","Phone :080-1234-567","E-Mail :yaoo@hotmail.com"];
  }
}

