-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('completed', 'canceled', 'opened');

-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('completed', 'canceled', 'opened');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ong', 'voluntary');

-- CreateEnum
CREATE TYPE "EmployeeOffice" AS ENUM ('admin', 'helper');

-- CreateEnum
CREATE TYPE "ComplaintReason" AS ENUM ('ong', 'open', 'voluntary', 'donation', 'vacancy');

-- CreateEnum
CREATE TYPE "VoluntaryStatus" AS ENUM ('accepted', 'waiting', 'canceled', 'expired', 'concluded');

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "DonationStatus" NOT NULL DEFAULT 'opened',
    "complement" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "google_coordinates" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "main_phone" TEXT NOT NULL,
    "secondary_phone" TEXT NOT NULL,
    "main_email" TEXT NOT NULL,
    "secondary_email" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "necessary_amount" TEXT NOT NULL,
    "amount_received" TEXT NOT NULL,
    "status" "ItemStatus" NOT NULL DEFAULT 'opened',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "donationId" TEXT NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacancy" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "numberOfPeople" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "status" "UserStatus" DEFAULT 'active',
    "type" "UserType",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "addressId" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "office" "EmployeeOffice" NOT NULL DEFAULT 'helper',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ongId" TEXT NOT NULL,
    "voluntaryId" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint" (
    "id" TEXT NOT NULL,
    "file" TEXT,
    "title" TEXT NOT NULL,
    "reason" "ComplaintReason" NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "voluntary" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "avaliation" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "status" "VoluntaryStatus" NOT NULL,
    "initialAvailability" TIMESTAMP(3) NOT NULL,
    "finalAvailability" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "vacancyId" TEXT NOT NULL,

    CONSTRAINT "voluntary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "ong" ADD CONSTRAINT "ong_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "donation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_voluntaryId_fkey" FOREIGN KEY ("voluntaryId") REFERENCES "voluntary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntary" ADD CONSTRAINT "voluntary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntary" ADD CONSTRAINT "voluntary_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "vacancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
