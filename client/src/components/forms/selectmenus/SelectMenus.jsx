import React, { Component } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { BasicSelectOption, BasicMultiSelectOption, groupedOptions } from 'util/data/SelectMenuData'
import SelectWrapper from './select.style'

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
}

const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

// custom style

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: `''`,
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
          ...styles,
          backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
        backgroundColor: data.color,
        color: 'white',
    },
    }),
  };

class SelectMenus extends Component {

    state = {
        selectedOption: null
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);
    }
    
    render() {

        const { selectedOption } = this.state;

        return (
            <SelectWrapper>
                <div className="row ma-0 select-menus-block">

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Single Select
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    This is a single select menu you can choose one option only.
                                </div>
                                <Select
                                    value={selectedOption}
                                    placeholder="select options"
                                    onChange={this.handleChange}
                                    options={BasicSelectOption}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Multi Select
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    This is a multi select menu you can choose more than one options.
                                </div>
                                <Select
                                    defaultValue={[BasicMultiSelectOption[2], BasicMultiSelectOption[3]]}
                                    isMulti
                                    placeholder="select options"
                                    name="colors"
                                    options={BasicMultiSelectOption}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Grouped Options
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    You can make groups in the options menu as well.
                                </div>
                                <Select
                                    defaultValue={BasicMultiSelectOption[1]}
                                    options={groupedOptions}
                                    formatGroupLabel={formatGroupLabel}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Custom style single select
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    This is a single select menu with customize using different colors.
                                </div>
                                <Select
                                    defaultValue={BasicMultiSelectOption[2]}
                                    label="Single select"
                                    options={BasicMultiSelectOption}
                                    styles={colourStyles}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Custom style multi select
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    This is a multi select menu with customize using different colors.
                                </div>
                                <Select
                                    closeMenuOnSelect={false}
                                    defaultValue={[BasicMultiSelectOption[0], BasicMultiSelectOption[1]]}
                                    isMulti
                                    options={BasicMultiSelectOption}
                                    styles={colourStyles}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ptb-15">
                        <div className="roe-card-style">
                            <div className="roe-card-header"> 
                                <span className="hash"># </span>Customised theme
                            </div>
                            <div className="roe-card-body"> 
                                <div className="roe-card-description">
                                    You can customize theme of select menu which you expect.
                                </div>
                                <Select
                                    defaultValue={BasicSelectOption[2]}
                                    label="Single select"
                                    options={BasicSelectOption}
                                    theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                    ...theme.colors,
                                        primary25: 'hotpink',
                                        primary: 'black',
                                    },
                                    })}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </SelectWrapper>
        );
    }
}

export default SelectMenus;