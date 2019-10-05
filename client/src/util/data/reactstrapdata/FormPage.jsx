/* eslint import/no-webpack-loader-syntax: off */

import FormExample from 'components/reactStrap/Form';
import FormGridExample from 'components/reactStrap/FormGrid';
import FormGridFormRowExample from 'components/reactStrap/FormGridFormRow';
import FormInlineExample from 'components/reactStrap/FormInline';
import FormFeedbackExample from 'components/reactStrap/FormFeedback';
import InputTypeExample from 'components/reactStrap/InputType';
import InlineCheckboxesExample from 'components/reactStrap/InlineCheckboxes';
import InputSizingExample from 'components/reactStrap/InputSizing';
import InputGridSizingExample from 'components/reactStrap/InputGridSizing';
import LabelHiddenExample from 'components/reactStrap/LabelHidden';
import CustomControlsExample from 'components/reactStrap/CustomControls';

const FormExampleSource = require('!!raw-loader!components/reactStrap/Form');
const FormGridExampleSource = require('!!raw-loader!components/reactStrap/FormGrid');
const FormGridFormRowExampleSource = require('!!raw-loader!components/reactStrap/FormGridFormRow');
const FormInlineExampleSource = require('!!raw-loader!components/reactStrap/FormInline');
const FormFeedbackExampleSource = require('!!raw-loader!components/reactStrap/FormFeedback');
const InputTypeExampleSource = require('!!raw-loader!components/reactStrap/InputType');
const InlineCheckboxesExampleSource = require('!!raw-loader!components/reactStrap/InlineCheckboxes');
const InputSizingExampleSource = require('!!raw-loader!components/reactStrap/InputSizing');
const InputGridSizingExampleSource = require('!!raw-loader!components/reactStrap/InputGridSizing');
const LabelHiddenExampleSource = require('!!raw-loader!components/reactStrap/LabelHidden');
const CustomControlsExampleSource = require('!!raw-loader!components/reactStrap/CustomControls');

export const formPageData = [
    {
        title: 'Demo',
        example: FormExample,
        code: FormExampleSource,
    },
    {
        title: 'Form Grid',
        example: FormGridExample,
        code: FormGridExampleSource,
    },
    {
        title: 'Form Grid with Form Row',
        example: FormGridFormRowExample,
        code: FormGridFormRowExampleSource,
    },
    {
        title: 'Inline Form',
        example: FormInlineExample,
        code: FormInlineExampleSource,
    },
    {
        title: 'Form Validation',
        example: FormFeedbackExample,
        code: FormFeedbackExampleSource,
    },
    {
        title: 'Input Types',
        example: InputTypeExample,
        code: InputTypeExampleSource,
    },
    {
        title: 'Inline checkboxes',
        example: InlineCheckboxesExample,
        code: InlineCheckboxesExampleSource,
    },
    {
        title: 'Input Sizing',
        example: InputSizingExample,
        code: InputSizingExampleSource,
    },
    {
        title: 'Input Grid Sizing',
        example: InputGridSizingExample,
        code: InputGridSizingExampleSource,
    },
    {
        title: 'Hidden Labels',
        example: LabelHiddenExample,
        code: LabelHiddenExampleSource,
    },
    {
        title: 'Custom Inputs',
        example: CustomControlsExample,
        code: CustomControlsExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Input.propTypes = {
            children: PropTypes.node,
            // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
            type: PropTypes.string,
            size: PropTypes.string,
            bsSize: PropTypes.string,
            state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
            valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
            invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
            innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
            plaintext: PropTypes.bool,
            addon: PropTypes.bool,
            className: PropTypes.string,
            cssModule: PropTypes.object,
          };
          CustomInput.propTypes = {
            className: PropTypes.string,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            type: PropTypes.string.isRequired, // radio, checkbox, select, range.
            label: PropTypes.string, // used for checkbox and radios
            inline: PropTypes.bool,
            valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
            invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
            bsSize: PropTypes.string,
            cssModule: PropTypes.object,
            children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]), // for type="select"
            // innerRef would be referenced to select node or input DOM node, depends on type property
            innerRef: PropTypes.oneOfType([
              PropTypes.object,
              PropTypes.string,
              PropTypes.func,
            ])
          };
          Form.propTypes = {
            children: PropTypes.node,
            inline: PropTypes.bool,
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
            innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
            className: PropTypes.string,
            cssModule: PropTypes.object,
          };
          FormFeedback.propTypes = {
            children: PropTypes.node,
            // Pass in a Component to override default element
            tag: PropTypes.string, // default: 'div'
            className: PropTypes.string,
            cssModule: PropTypes.object,
            valid: PropTypes.bool, // default: undefined
            tooltip: PropTypes.bool
          };
          FormGroup.propTypes = {
            children: PropTypes.node,
            // Applied the row class when true, does nothing when false
            row: PropTypes.bool,
            // Applied the form-check class when true, form-group when false
            check: PropTypes.bool,
            inline: PropTypes.bool,
            // Applied the disabled class when the check and disabled props are true, does nothing when false
            disabled: PropTypes.bool,
            // Pass in a Component to override default element
            tag: PropTypes.string, // default: 'div'
            className: PropTypes.string,
            cssModule: PropTypes.object,
          };
          FormText.propTypes = {
            children: PropTypes.node,
            inline: PropTypes.bool,
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
            color: PropTypes.string, // default: 'muted'
            className: PropTypes.string,
            cssModule: PropTypes.object,
        };`,
    },
]