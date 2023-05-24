-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun
SELECT * FROM Customers where PostalCode = "1010"
-- id'si 11 olan tedarikçinin telefon numarasını bulun
SELECT Phone FROM [Suppliers] where SupplierID = 11
-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
SELECT * FROM [Orders] order by OrderDat desc limit 10
-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
SELECT * FROM [Customers] where City = 'London' or City = 'Madrid' or Country = 'Brazil'
SELECT * FROM [Customers] where City in ('London','Madrid') or Country = 'Brazil'
-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
insert into Customers values (92,'Bilbo Baggins','The Shire','Bag End','1 Hobbit Hole','111','Middle Earth')
-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
Update [Customers] set PostalCode='11122' where CustomerName = 'Bilbo Baggins'
-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır
select Count(distinct City) from Customers
-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
SELECT * FROM [Suppliers] where Length (SupplierName) >20