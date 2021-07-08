<h1 align="center">VulnRomans</h1>

<p align="center"><img src="https://user-images.githubusercontent.com/11268952/124802816-4866b380-df50-11eb-921b-fa0e8b791c8f.png" width="400"></p>

## About VulnRomans
Vulnerable web application running in a Docker container.

> **⚠ WARNING: Vulnerable Web Application.**
> This web application is vulnerable by design and should only be used for demo purposes.

## Installation

Clone
```bash
git clone git@github.com:CryDeTaan/vulnromans.git
cd vulnromans
```

Run
```bash
docker build . -t vulnromans 
docker run -p 3000:3000 vulnromans
```

## License

VulnRomans is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).