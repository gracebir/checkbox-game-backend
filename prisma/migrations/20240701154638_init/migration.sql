-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Checkbox" (
    "checkboxId" TEXT NOT NULL,
    "row" INTEGER NOT NULL,
    "col" INTEGER NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "checkCount" INTEGER NOT NULL DEFAULT 0,
    "lastCheckedUser" TEXT,

    CONSTRAINT "Checkbox_pkey" PRIMARY KEY ("checkboxId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Checkbox" ADD CONSTRAINT "Checkbox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
