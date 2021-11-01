#average usage of coffee for a month
#storing permanant info? averaging out continuasly? input per day or per week, multiple array?
#4 week array
arrWeek1 = [] 
arrWeek2 = []
arrWeek3 = []
arrWeek4 = []
newWeek1 = []
newWeek2 = []
newWeek3 = []
newWeek4 = []
i = 0
listOfItems = ['Dark','Light','Decaf','Cocoa','Bag FV','Bag Milk','CM FV','CM Orig','Cups(50ct)']
listOfItems2 = ['Dark','Light','Decaf','Cocoa','Bag FV','Bag Milk','CM FV','CM Orig','Cups(50ct)']
listOfItems3 = ['Dark','Light','Decaf','Cocoa','Bag FV','Bag Milk','CM FV','CM Orig','Cups(50ct)']
listOfItems4 = ['Dark','Light','Decaf','Cocoa','Bag FV','Bag Milk','CM FV','CM Orig','Cups(50ct)']

print(listOfItems)

#week1 
for i in range(9):
    week1 = (input("Week 1: " + listOfItems[i] + ": "))
    ++i
    arrWeek1.append(week1)
    for item1 in week1:
        newWeek1.append(int(week1))
print('\n')

#week2

for j in range(9):
    week2 = (input("Week 2: " + listOfItems2[j] + ": "))
    j = j + 1
    arrWeek2.append(week2)
    for item2 in week2:
        newWeek2.append(int(week2))
print('\n')

#week3

for k in range(9):
    week3 = (input("Week 3: " + listOfItems3[k] + ": "))
    k = k + 1
    arrWeek3.append(week3)
    for item3 in week3:
        newWeek3.append(int(week3))
print('\n')

#week4

for l in range(9):
    week4 = (input("Week 4: " + listOfItems4[l] + ": "))
    l = l + 1
    arrWeek4.append(week4)
    for item4 in week4:
        newWeek4.append(int(week4))
print('\n')

#average weekly
#average week 1

print('Week 1 Dark Roast Usage: ', newWeek1[0]/4)
print('Week 1 Light Roast Usage: ', newWeek1[1]/4)
print('Week 1 Decaf Usage: ', newWeek1[2]/4)
print('Week 1 Cocoa Usage: ', newWeek1[3]/4)
print('Week 1 Bagged French Vanilla Usage: ', newWeek1[4]/4)
print('Week 1 Bagged Milk Usage: ', newWeek1[5]/4)
print('Week 1 CoffeeMate French Vanilla Usage: ', newWeek1[6]/4)
print('Week 1 CoffeeMate Original Usage: ', newWeek1[7]/4)
print('Week 1 Cups(50ct) Usage: ', newWeek1[8]/4)
print('\n')

#average week 2

print('Week 2 Dark Roast Usage: ', newWeek2[0]/4)
print('Week 2 Light Roast Usage: ', newWeek2[1]/4)
print('Week 2 Decaf Usage: ', newWeek2[2]/4)
print('Week 2 Cocoa Usage: ', newWeek2[3]/4)
print('Week 2 Bagged French Vanilla Usage: ', newWeek2[4]/4)
print('Week 2 Bagged Milk Usage: ', newWeek2[5]/4)
print('Week 2 CoffeeMate French Vanilla Usage: ', newWeek2[6]/4)
print('Week 2 CoffeeMate Original Usage: ', newWeek2[7]/4)
print('Week 2 Cups(50ct) Usage: ', newWeek2[8]/4)
print('\n')

#average week 3

print('Week 3 Dark Roast Usage: ', newWeek3[0]/4)
print('Week 3 Light Roast Usage: ', newWeek3[1]/4)
print('Week 3 Decaf Usage: ', newWeek3[2]/4)
print('Week 3 Cocoa Usage: ', newWeek3[3]/4)
print('Week 3 Bagged French Vanilla Usage: ', newWeek3[4]/4)
print('Week 3 Bagged Milk Usage: ', newWeek3[5]/4)
print('Week 3 CoffeeMate French Vanilla Usage: ', newWeek3[6]/4)
print('Week 3 CoffeeMate Original Usage: ', newWeek3[7]/4)
print('Week 3 Cups(50ct) Usage: ', newWeek3[8]/4)
print('\n')

#average week 4

print('Week 4 Dark Roast Usage: ', newWeek4[0]/4)
print('Week 4 Light Roast Usage: ', newWeek4[1]/4)
print('Week 4 Decaf Usage: ', newWeek4[2]/4)
print('Week 4 Cocoa Usage: ', newWeek4[3]/4)
print('Week 4 Bagged French Vanilla Usage: ', newWeek4[4]/4)
print('Week 4 Bagged Milk Usage: ', newWeek4[5]/4)
print('Week 4 CoffeeMate French Vanilla Usage: ', newWeek4[6]/4)
print('Week 4 CoffeeMate Original Usage: ', newWeek4[7]/4)
print('Week 4 Cups(50ct) Usage: ', newWeek4[8]/4)
print('\n')

#average monthly

print('Monthly Dark Roast Usage',(newWeek1[0] + newWeek2[0] + newWeek3[0] + newWeek4[0])/4)
print('Monthly Light Roast Usage',(newWeek1[1] + newWeek2[1] + newWeek3[1] + newWeek4[1])/4)
print('Monthly Decaf Usage',(newWeek1[2] + newWeek2[2] + newWeek3[2] + newWeek4[2])/4)
print('Monthly Cocoa Usage',(newWeek1[3] + newWeek2[3] + newWeek3[3] + newWeek4[3])/4)
print('Monthly Bagged French Vanilla Usage',(newWeek1[4] + newWeek2[4] + newWeek3[4] + newWeek4[4])/4)
print('Monthly Bagged Milk Usage',(newWeek1[5] + newWeek2[5] + newWeek3[5] + newWeek4[5])/4)
print('Monthly CoffeeMate French Vanilla Usage',(newWeek1[6] + newWeek2[6] + newWeek3[6] + newWeek4[0])/4)
print('Monthly CoffeeMate Original Usage',(newWeek1[7] + newWeek2[7] + newWeek3[7] + newWeek4[7])/4)
print('Monthly Cups(50ct) Usage',(newWeek1[8] + newWeek2[8] + newWeek3[8] + newWeek4[8])/4)