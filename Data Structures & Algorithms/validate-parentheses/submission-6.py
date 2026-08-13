class Solution:
    def isValid(self, s: str) -> bool:
        print("s", s)
        closeToOpenMapper = { ")" : "(", "]" : "[", "}" : "{" }
        myStack = []

        for c in s:
            if c in closeToOpenMapper:
                if myStack and closeToOpenMapper[c] == myStack[-1]:
                    myStack.pop()
                else:
                    return False
            else:
                myStack.append(c)
        return len(myStack) == 0