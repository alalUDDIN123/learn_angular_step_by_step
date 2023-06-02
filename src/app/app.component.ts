import { Component } from '@angular/core';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Github Repository Readme content";
  readmeContent: string = '';
  isLoading: boolean = false;
  readmeSteps: { title: string, link: string }[] = [];
  errorMessage: string = '';
  username: string = '';
  repositoryName: string = '';
  isContentDisplayed: boolean = false
  resetForm() {
    this.username = '';
    this.repositoryName = '';
  }


  constructor(
    private githubApiService: GithubApiService,
  ) { }

  fetchRepositoryReadmeContent() {
    if (!this.username || !this.repositoryName) {
      alert("Please enter both username and repository name.");
      return;
    }

    const userRepositoryData = {
      username: this.username,
      repositoryName: this.repositoryName
    };

    this.isLoading = true;
    this.errorMessage = '';

    this.githubApiService.getRepositoryReadmeContent(userRepositoryData).subscribe(
      readme => {
        const readmeContent = atob(readme.content);
        this.readmeContent = readmeContent
        this.isContentDisplayed = true
        this.isLoading = false;
        this.resetForm();
      },
      error => {
        this.isLoading = false;
        this.handleError(error);
      }
    );
  }


  parseReadmeContentWithLinks() {
    if (!this.readmeContent) {
      return '';
    }

    // Remove unwanted syntax
    const cleanedContent = this.readmeContent
      .replace(/---+/g, '') // Remove horizontal lines
      .replace(/`+/g, '') // Remove code blocks
      .replace(/(\d+\.\s+)?[-•]\s+/g, ''); // Remove bullet points and numbering

    // Convert URLs to clickable links
    const contentWithLinks = cleanedContent.replace(
      /(\[([^\]]+)\]\((https?:\/\/[^\)]+)\))/g,
      '<a href="$3" target="_blank">$2</a>'
    );

    // Apply HTML tags to unwanted syntax sections
    const formattedContent = contentWithLinks.replace(
      /(\*\*([^*]+)\*\*)/g,
      '<strong>$2</strong>'
    ).replace(
      /(#+)\s*(.*)/g,
      (_, hash, text) => `<h${hash.length}>${text}</h${hash.length}>`
    );

    return formattedContent;
  }

  showBtnClick() {
    this.isContentDisplayed = false
  }

  handleError(error: any) {
    if (error.status === 404) {
      this.errorMessage = "User or repository not found";
    } else {
      this.errorMessage = "Error fetching README file content";
    }
    console.log('Error:', error);
  }


  // this is form showing only content which are atteched with external or braches link

  // parseReadmeContent() {
  //   const stepsRegex = /- \[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  //   const matches = Array.from(this.readmeContent.matchAll(stepsRegex));
  //   // console.log("matches", matches);


  //   if (matches.length === 0) {
  //     this.errorMessage = "Read steps content not found";
  //   } else {
  //     this.readmeSteps = matches.map(match => {
  //       const title = match[1];
  //       const link = match[2];
  //       const isExternalLink = link.startsWith('http');

  //       return {
  //         title: title,
  //         link: link,
  //         isExternalLink: isExternalLink
  //       };
  //     });

  //     // console.log("this.readmeSteps", this.readmeSteps);
  //   }
  // }

}
