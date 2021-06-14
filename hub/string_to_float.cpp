#include "string_to_float.h"
float parsedValues[20];

int charToInt(char val[]) {
  int cA = val[0] - '0';
  int cB = val[1] - '0';
  int result = cA * 10 + cB;
  return result;
}

float charToFloat(char val[]) {
  float result = charToInt(val);
  char dec[2] = { val[3], val[4] };
  float decVal = charToInt(dec);
  result = (decVal * 0.01) + result;
  return result;
}

float *parseToValues(String serverBodyResponse) {
  int l = serverBodyResponse.length();

  short int mode = 0;
  char val[] = "      ";
  short int co = 0;
  float results[10] = { };
  int resultsCount = 0;
  for(int i = 0;i < l + 1;i ++) {
    char c = serverBodyResponse[i];
    
    if(c == '|') {
      if(co == 0) {
        mode = 1;
      }
      else {
        float result;
        if(co == 2) 
          result = charToInt(val);
        else
          result = charToFloat(val);  
        parsedValues[resultsCount] = result;
        resultsCount ++;
        co = 0;
        mode = 1;
        memset(val, 0, sizeof(val));       
      }
    }
    else if(mode == 1) {
      val[co] = c;
      co ++;
    }
  }
  return parsedValues;
}
