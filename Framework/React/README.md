React
===
###### tags:`前端(frontend)`,`框架`,`React`,`問題集`
# 核心理念
# 生命週期 
## ver16.3
![react_16.4](https://i.imgur.com/cWSakAT.jpg)
## ver16.4+
![react_16.4+](https://i.imgur.com/D0I0m41.png)

# Component
## Class Component(CC)
```javascript=
    
```

## Function Component(FC)
```javascript=
    
```

## High Order Component(HOC)
```javascript=
    
```

# Hooks 16.8+
```javascript=
    
```

# 嵌入
```javacript=
function Component({title}){
    return(
        <div className="name">{title}</div>
    )
}
function Container({children}){
    return(
        <div className="container">
        {children}
        </div>
    )
}

export default function(){
    return(
        <Container>
            <Component title={'Gary'}/>
        </Container>
    )
}
```


[未整理的內容](https://hackmd.io/@23nVBlH-TUSR0yGuQehz2w/HkPJTMpRw/edit)

