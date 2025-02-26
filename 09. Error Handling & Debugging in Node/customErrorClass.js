class ValidationError extends Error {  
    constructor(message) {  
      super(message);  
      this.name = 'ValidationError';  
    }  
  }  
  
  function validateUser(user) {  
    if (!user.email) throw new ValidationError('Email is required');  
  }