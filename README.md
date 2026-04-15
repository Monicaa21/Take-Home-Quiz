# TAKE HOME QUIZ
## 535250041 - Monica Irene

## Development Setup (Dari Bapak Janson)

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints (Dari Bapak Janson)

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Dari Monica mengenai tugas Take Home Quiz

Endpoint yang saya buat di tugas ini(diluar endpoint user dari Bapak Janson):
POST prizes
GET prizes
GET prizes/available
GET prizes/remaining

POST gacha/roll
GET gacha/history/:name
GET gacha/winners

Sebelumnya, saya menggunakan mongodb compass(bukan atlas), jadi perlu untuk membuat akun dan mengupload list prize nya di echo api dan akan terupload ke mongodb compass secara lokal. Sistem gacha ini adalah user harus membuat akun, kemudian user dapat gacha hadiah dengan menginput nama mereka sebagai daftar untuk menggacha. Lalu ketika ingin melihat data pemenang setelah gacha dapat dilakukan dan terdapat sensor nama(tidak secara keseluruhan).

## Cara kerja endpoint dapat dilihat sebagai berikut:

1. Buat akun dengan "POST : localhost:5000/api/users" di echo API, lalu isi body:
{
    "email": "isi",
    "password": "isi (minimal 8 karakter)",
    "full_name": "isi",
    "confirm_password": "isi sama dengan password"
}

2. Lihat data user dengan "GET : localhost:5000/api/users" di echo API

3. Buat list prize dengan "POST : localhost:5000/api/prizes" dan isi body:
{
    "name": "Emas 10 gram",
    "kuota": 1,
    "probability": 1
}
upload pertama

{
    "name": "Smartphone X",
    "kuota": 5,
    "probability": 5
}
upload kedua

{
    "name": "Smartphone Y",
    "kuota": 10,
    "probability": 10
}
upload ketiga

{
    "name": "Voucher Rp100.000",
    "kuota": 100,
    "probability": 30
}
upload keempat

{
    "name": "Pulsa 50.000",
    "kuota": 500,
    "probability": 54
}
upload kelima

4. Akses "GET : localhost:5000/api/prizes" untuk melihat list prize yang dibuat pada step 2

5. Jika sudah membuat akun dan list prize(hadiah)nya, user dapat mengakses endpoint "POST : localhost:5000/api/gacha/roll" untuk mulai gacha
Isi body dengan 'name' yang sama dengan akun yang dibuat tadi. Isi body:
{
    "name": "isi dengan full_name yang tadi dibuat"
}

6. 