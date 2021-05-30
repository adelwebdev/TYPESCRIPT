#include <iostream>

class X
{
public:
  int nb;
public:
  void inc() {nb++;}
  void print() {std::cout<<nb;}
  
};


class Y
{
public:
  static void exemple()
  {
    X x;
    x.nb=10;
    x.inc();
    x.print();
  }
};

int main()
{
  std::cout<<"Entier de la class X:\n";
  X entier;
  entier.nb=10;
  entier.print();
  std::cout<<"\n";
  /*Dans le cas où la fonction n’est pas static on déclare l'objet
    Y y;
   y.exemple()*/
  Y::exemple();
}