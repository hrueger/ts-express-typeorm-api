# TS + Express + TypeOrm API Example

> for Jumagoro ;-)

## Registering of the interceptors:
`app.module.ts`:
```TypeScript
// Imports

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ...
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule, // for the HttpCLient
        ...
    ],
    providers: [
        ...
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
})
export class AppModule { }

```
