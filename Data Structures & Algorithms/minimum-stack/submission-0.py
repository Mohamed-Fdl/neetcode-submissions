class MinStack:

    def __init__(self):
        self.stack = []
        

    def push(self, val: int) -> None:
        self.stack.append(val)
        return
        

    def pop(self) -> None:
        if self.stack:
            self.stack.pop()
        return
        

    def top(self) -> int:
        if self.stack:
            return self.stack[-1]
        return
        

    def getMin(self) -> int:
        return min(self.stack)
        
