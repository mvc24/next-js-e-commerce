CREATE TABLE "editions_composers"(
    "id" INTEGER NOT NULL,
    "edition_id" INTEGER NOT NULL,
    "composer_id" INTEGER NOT NULL,
    "article_no" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "editions_composers" ADD PRIMARY KEY("id");
ALTER TABLE
    "editions_composers" ADD CONSTRAINT "editions_composers_article_no_unique" UNIQUE("article_no");
CREATE TABLE "categories"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "categories" ADD PRIMARY KEY("id");
CREATE TABLE "composers"(
    "id" INTEGER NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(255) NULL,
    "first_abbreviation" VARCHAR(255) NULL
);
ALTER TABLE
    "composers" ADD PRIMARY KEY("id");
CREATE TABLE "materials"(
    "id" INTEGER NOT NULL,
    "format" VARCHAR(255) NULL
);
ALTER TABLE
    "materials" ADD PRIMARY KEY("id");
CREATE TABLE "editions"(
    "id" INTEGER NOT NULL,
    "article_no" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "supplementary_title" VARCHAR(255) NULL,
    "price" INTEGER NOT NULL,
    "material_id" INTEGER NULL,
    "category_id" VARCHAR(255) NOT NULL,
    "instrument_no" INTEGER NOT NULL
);
ALTER TABLE
    "editions" ADD PRIMARY KEY("id");
ALTER TABLE
    "editions" ADD CONSTRAINT "editions_article_no_unique" UNIQUE("article_no");
ALTER TABLE
    "editions_composers" ADD CONSTRAINT "editions_composers_edition_id_foreign" FOREIGN KEY("edition_id") REFERENCES "editions"("id");
ALTER TABLE
    "editions" ADD CONSTRAINT "editions_material_id_foreign" FOREIGN KEY("material_id") REFERENCES "materials"("id");
ALTER TABLE
    "editions" ADD CONSTRAINT "editions_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "categories"("id");
ALTER TABLE
    "editions_composers" ADD CONSTRAINT "editions_composers_composer_id_foreign" FOREIGN KEY("composer_id") REFERENCES "composers"("id");
