import React, { Component,Fragment } from 'react';
import * as S from './JournalReflectionForm.style';
import * as C from './Journal-AddEntry.style';

class ReflectionForm extends Component {
state={
};

render(){
  return(<S.Overlay>
  <S.H3>Good job on<br/>
completing your goal!<br/>
What went well?<br/>
What went poorly?</S.H3>
<S.TextArea rows="10" cols="20" name="reflection" placeholder="Your reflections..." required/>
<S.ButtonContainer>
<C.Submit type="submit" value="cancel" />
<C.Submit type="submit" value="save" />
</S.ButtonContainer>
    </S.Overlay>


  )
};
};


export default ReflectionForm;
