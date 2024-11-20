# TfWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

There are two projects in this workspace now
1. ngx-tf-library
- create components or services that could be shared across transfinder products.
   
2. tf-ng-playground
- Independent playground for testing components and services provided in ngx-tf-library.

## Development

1. Build library project.
`ng build ngx-tf-library --watch`

2.  Test with plagyround project.
`ng serve tf-ng-playground`

3. Generate new component
`ng generate component components/example-component --project=ngx-tf-library`

## Publish to NPM

- Update version in 'projects/ngx-tf-library/package.json'.
- Run `ng build ngx-tf-library`.
- Navigate to folder 'dist/ngx-tf-library'.
- Run `publish --registry=https://registry.npmjs.org/`.
