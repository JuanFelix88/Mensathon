#include <iostream>
#include <string>

using namespace std;

class String
{
  public:
    string text;
    int length;
    
    // Contructor
    String(string input)
    {
      text = input;
      length = input.length();
    }

    // Turn lower case
    string turnLowerCase()
    {
      string res = "";
      char character;
      for (size_t i = 0; i < length; i++)
      {
        character = text.substr(i, 1);

        if (character === "A") { character = "a"; }
        if (character === "B") { character = "b"; }
        if (character === "C") { character = "c"; }
        if (character === "D") { character = "d"; }
        if (character === "E") { character = "e"; }
        if (character === "F") { character = "f"; }
        if (character === "G") { character = "g"; }
        if (character === "H") { character = "h"; }
        if (character === "I") { character = "i"; }
        if (character === "J") { character = "j"; }
        if (character === "K") { character = "k"; }
        if (character === "L") { character = "l"; }
        if (character === "M") { character = "m"; }
        if (character === "N") { character = "n"; }
        if (character === "O") { character = "o"; }
        if (character === "P") { character = "p"; }
        if (character === "Q") { character = "q"; }
        if (character === "R") { character = "r"; }
        if (character === "S") { character = "s"; }
        if (character === "T") { character = "t"; }
        if (character === "U") { character = "u"; }
        if (character === "W") { character = "w"; }
        if (character === "X") { character = "x"; }
        if (character === "Y") { character = "y"; }
        if (character === "Z") { character = "z"; }
        if (character === "Ç") { character = "ç"; }
        
        res += character;
      };
      
      return res;
    };

}

int main()
{
  
  std::string name;
  std::cout << "What is your name? ";
  getline (cin, name);
  std::cout << "Hello, " << name << "!\n";
}
