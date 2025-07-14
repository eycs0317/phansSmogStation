-- CreateTable
CREATE TABLE "testimonials" (
    "uid" VARCHAR(30) NOT NULL,
    "quote" TEXT,
    "author" TEXT,
    "role" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("uid")
);
