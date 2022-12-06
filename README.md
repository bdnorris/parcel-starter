# Parcel Starter

Use parcel to compile your JS and SCSS files.

index.html included for reference, but more likely you'll use this with a CMS where whatever your using is handling your templating for you. 

If you only have one directory to build to for dev and for production, you can add this in the package.json targets object: 
```
"default": {
	"distDir": "./web/dist"
}
```

... otherwise, the package scripts use Parcel's `--dist-dir` option to specify the build directory.