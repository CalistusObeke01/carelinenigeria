import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MetaService {
    constructor(
        private titleService: Title,
        private meta: Meta,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    updateMetaInfo(description, keywords, author) {
        this.meta.updateTag({ name: 'description', content: description});
        this.meta.updateTag({ name: 'keywords', content: keywords});
        this.meta.updateTag({ name: 'author', content: author});
    }

    updateTitle(title?: string) {
        if (!title) {
            this.router.events
                .pipe(
                    filter((event) => event instanceof NavigationEnd),
                    map(() => this.activatedRoute),
                    map((route) => {
                        while (route.firstChild) { route = route.firstChild; }
                        return route;
                    }),
                    filter((route) => route.outlet === 'primary'),
                    mergeMap((route) => route.data)).subscribe((event) => {
                        this.updateMetaInfo(event.description, event.keywords, event.author);
                        this.titleService.setTitle('Carelinenigeria' + event.title);
                    });
        } else {
            this.titleService.setTitle('Carelinenigeria' + title);
        }
    }
}
